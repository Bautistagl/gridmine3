'use client'




import React, { useEffect, useRef, useState } from "react";
import supabase from "../../supabase";
import axios from "axios";
import Sidebar from "@/components/Sidebar";


import { CategoryScale, Chart, LineController, LineElement, LinearScale, PointElement} from 'chart.js'


const BillingPage = () => {
  const [productos, setProductos] = useState([]);
  const [btcUsd, setBtcUsd] = useState(null);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([])
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [transactionDates, setTransactionDates] = useState([]);
  const [bitcoinData, setBitcoinData] = useState([]);



  const userEmail =
    typeof window !== "undefined" ? localStorage.getItem("emailGridMine") : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [btcResponse, productosResponse] = await Promise.all([
          axios.get(`https://api.blockchain.com/v3/exchange/tickers/BTC-USD`),
          supabase.from("Mineros").select("*").eq("emailUsuario", userEmail),
        ]);
        
       

        setBtcUsd(btcResponse.data.last_trade_price);
        setProductos(productosResponse.data);
        setLoading(false);
     
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

   

    fetchData();

    
  
   
  }, [userEmail]);

 
  const fetchCoin = async (date) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${date}`);
      
      return response.data.market_data.current_price.usd.toFixed(2)
      
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const fetchBitcoinData = async () => {
    const bitcoinDataArray = [];
    for (const date of transactionDates) {
      
      const data = await fetchCoin(date);
      console.log(data)
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    // setBitcoinData(bitcoinDataArray);
    // console.log(bitcoinDataArray)
  };




  
  useEffect(() => {
    if (btcUsd !== null) {
        getBalance();
    }
}, [btcUsd]);


  useEffect(() => {
    
    const ctx = chartRef.current.getContext('2d');
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }
    Chart.register(LineController, LinearScale, CategoryScale,PointElement,LineElement);
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: transactions.map(transaction => transaction.date),
datasets: [{
  label: 'BTC Acumulado',
  data: transactions.map(transaction => transaction.balance),
  borderWidth: 5,
  barThickness: 80,
  backgroundColor: ['#36B079'],
}],
       
      },
      
      options: {
      
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              color: 'white',
              font: {
                size: 18 // Cambia el tamaño de los ticks del eje x aquí
            }
          }
          },
          x: {
            beginAtZero: true,
            ticks: {
                color: 'white',
                font: {
                  size: 12 // Cambia el tamaño de los ticks del eje x aquí
              }
            }
        },
        },
       
       
      },
   

    });
  }, [transactions]);



  const getBalance = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://blockchain.info/multiaddr?active=bc1qu5hc0sk53wfpugma5u987399t5v0hpljxtr7w2`
      );
      
      
          
      const balanceInBTC = response.data.addresses[0].total_received / 100000000;
      setBalance(balanceInBTC );
  
      const transactionsWithDate = response.data.txs.map(tx => {
      
        const balanceInBTC = tx.balance / 100000000;
        const balanceInUSD = balanceInBTC * btcUsd;
        const timestamp = tx.time;
        const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
        const month = date.getMonth() + 1;
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        const monthNames = ['asdsa',"Enero", "Febrero", "Marzo", "Abril", "Mayu", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const formattedDate = `${monthNames[month]} ${year}`;
        const dateCoin = `${day}-${month}-${year}`;
        
       
        return {
          date: formattedDate,
          balance: balanceInBTC,
           dateCoin : dateCoin
        };
      });
  
      setTransactions(transactionsWithDate.reverse());
      const datesArray = transactionsWithDate.map(transaction => transaction.dateCoin);
    setTransactionDates(datesArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-dashboard">
      <Sidebar />
      <div className="metrics-container">
       
        {loading ? (
          <p style={{color:'white'}}>Loading...</p>
        ) : (
          balance && (
            <div>
              <h2 style={{ color: "white" }}>
                Balance Total: ${(balance * btcUsd).toFixed(2)} USDT
              </h2>
            </div>
          )
        )}

      {/* <button onClick={()=>{fetchBitcoinData()}}> ver fechas</button> */}
    
      <div className="chart">

        
         <div>
      <canvas ref={chartRef} />
      </div>
    </div>
      </div>
    </div>
  );
};

export default BillingPage;



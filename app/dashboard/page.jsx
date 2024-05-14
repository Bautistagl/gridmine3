'use client';

import React, { useEffect, useRef, useState } from 'react';
import supabase from '../../supabase';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';
import DataCard from '@/components/Dashboard/DataCard';
import DataDash from '@/components/Dashboard/DataDash';
import DataLine from '@/components/Dashboard/DataLine';
import Status from '@/components/Dashboard/Status';

// import {
//   BarController,
//   BarElement,
//   CategoryScale,
//   Chart,
//   LinearScale,
//   plugins,
// } from 'chart.js';

const DashboardPage = () => {
  // const [productos, setProductos] = useState([]);
  // const [btcUsd, setBtcUsd] = useState(null);
  // const [balance, setBalance] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [transactions, setTransactions] = useState([]);
  // const chartRef = useRef(null);
  // const chartInstance = useRef(null);
  // const [transactionDates, setTransactionDates] = useState([]);

  // const userEmail =
  //   typeof window !== 'undefined'
  //     ? localStorage.getItem('emailGridMine')
  //     : null;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [btcResponse, productosResponse] = await Promise.all([
  //         axios.get(`https://api.blockchain.com/v3/exchange/tickers/BTC-USD`),
  //         supabase.from('Mineros').select('*').eq('emailUsuario', userEmail),
  //       ]);

  //       setBtcUsd(btcResponse.data.last_trade_price);
  //       setProductos(productosResponse.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [userEmail]);

  // useEffect(() => {
  //   if (btcUsd !== null) {
  //     getBalance();
  //   }
  // }, [btcUsd]);

  // useEffect(() => {
  //   const ctx = chartRef.current.getContext('2d');
  //   if (chartInstance.current !== null) {
  //     chartInstance.current.destroy();
  //   }
  //   Chart.register(
  //     LinearScale,
  //     CategoryScale,
  //     BarController,
  //     BarElement,
  //     plugins
  //   );
  //   chartInstance.current = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: transactions.map((transaction) => transaction.date),
  //       datasets: [
  //         {
  //           label: 'BTC Acumulado',
  //           data: transactions.map((transaction) => transaction.balance),
  //           borderWidth: 5,
  //           barThickness: 80,
  //           backgroundColor: ['#36B079'],
  //         },
  //       ],
  //     },

  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: false,
  //           ticks: {
  //             color: 'white',
  //             font: {
  //               size: 18, // Cambia el tamaño de los ticks del eje x aquí
  //             },
  //           },
  //         },
  //         x: {
  //           beginAtZero: true,
  //           ticks: {
  //             color: 'white',
  //             font: {
  //               size: 12, // Cambia el tamaño de los ticks del eje x aquí
  //             },
  //           },
  //         },
  //       },
  //       plugins: {},
  //     },
  //   });
  // }, [transactions]);

  // const getBalance = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(
  //       `https://blockchain.info/multiaddr?active=bc1qu5hc0sk53wfpugma5u987399t5v0hpljxtr7w2`
  //     );

  //     const balanceInBTC =
  //       response.data.addresses[0].total_received / 100000000;
  //     setBalance(balanceInBTC);

  //     const transactionsWithDate = response.data.txs.map((tx) => {
  //       const balanceInBTC = tx.balance / 100000000;
  //       const balanceInUSD = balanceInBTC * btcUsd;
  //       const timestamp = tx.time;
  //       const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  //       const month = date.getMonth();
  //       const day = date.getDate().toString().padStart(2, '0');
  //       const year = date.getFullYear();
  //       const monthNames = [
  //         'Enero',
  //         'Febrero',
  //         'Marzo',
  //         'Abril',
  //         'Mayu',
  //         'Junio',
  //         'Julio',
  //         'Agosto',
  //         'Septiembre',
  //         'Octubre',
  //         'Noviembre',
  //         'Deciembre',
  //       ];
  //       const formattedDate = `${monthNames[month]} ${year}`;
  //       const dateCoin = `${day}-${month}-${year}`;

  //       return {
  //         date: formattedDate,
  //         balance: balanceInBTC,
  //         dateCoin: dateCoin,
  //       };
  //     });

  //     setTransactions(transactionsWithDate.reverse());
  //     const datesArray = transactionsWithDate.map(
  //       (transaction) => transaction.dateCoin
  //     );
  //     setTransactionDates(datesArray);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="container-dashboard">
      <Sidebar />
      <div style={{ marginBottom: '100px' }}>.</div>
      <div style={{ display: 'flex' }}>
        <div>
          <DataCard title="Hashrate" data="200/Ths" />
          <DataCard title="Efficiency" data="200/Ths" />
        </div>
        <div className="dash-container">
          <DataDash />
          <DataLine
            state="circle3"
            name="Bitmain1"
            hashrate="70.06 TH"
            efficiency="99.58%"
            revenue="0.000003484 BTC"
          />
          <DataLine
            state="circle4"
            name="Bitmain2"
            hashrate="75.66 TH"
            efficiency="99.58%"
            revenue="0.000003484 BTC"
          />
          <DataLine
            state="circle3"
            name="Bitmain3"
            hashrate="73.76 TH"
            efficiency="99.58%"
            revenue="0.000003484 BTC"
          />
          <DataLine
            state="circle4"
            name="Bitmain4"
            hashrate="70.06 TH"
            efficiency="100%"
            revenue="0.000003484 BTC"
          />
        </div>
      </div>
      <Status uno="10" dos="0" tres="5" />
    </div>
  );
};

export default DashboardPage;

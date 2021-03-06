import React,{useState,useEffect} from 'react';
import * as JsSearch from 'js-search';
import {useSelector} from 'react-redux';


const PageB = (props) => {

    const search = new JsSearch.Search('name');
    search.addIndex('name');

    const [isLoaded,setIsLoaded] = useState(false);
    const [BTCList,setBTCList] = useState([]);
    const [ETHList,setETHList] = useState([]);
    const [SOLList,setSOLList] = useState([]);
    const [FTTList,setFTTList] = useState([]);
    const [ADAList,setADAList] = useState([]);

    const futureList = useSelector(state => state.dataList.futureList)
    search.addDocuments(futureList);
    //addDocumments to search library

    useEffect(() => {
        setBTCList(search.search("BTC"));
        setETHList(search.search("ETH"));
        setSOLList(search.search("SOL"));
        setFTTList(search.search("FTT"));
        setADAList(search.search("ADA"));
        setIsLoaded(true);
    },[futureList])

    console.log(BTCList);
    console.log(ETHList);
    console.log(SOLList);
    console.log(FTTList);
    console.log(ADAList);
    
    return(
        <div className="w-full text-white">
            <table className="w-full table-auto">
                <thead>
                    <tr className="border-b">
                        <th className="w-1/6">Asset/Contract name</th>
                        <th className="w-1/6">Bid</th>
                        <th className="w-1/6">Ask</th>
                        <th className="w-1/6">Price</th>
                        <th className="w-1/6">Underlying Asset</th>
                        <th className="w-1/6">Volume in USD for last 24 hours</th>
                    </tr>
                </thead>
                {
                    isLoaded &&
                    <tbody>
                    {
                        BTCList.map(data => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.bid}</td>
                                    <td>{data.ask}</td>
                                    <td>{data.price}</td>
                                    <td>{data.underlying}</td>
                                    <td>{data.volumeUsd24h}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        ETHList.map(data => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.bid}</td>
                                    <td>{data.ask}</td>
                                    <td>{data.price}</td>
                                    <td>{data.underlying}</td>
                                    <td>{data.volumeUsd24h}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        SOLList.map(data => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.bid}</td>
                                    <td>{data.ask}</td>
                                    <td>{data.price}</td>
                                    <td>{data.underlying}</td>
                                    <td>{data.volumeUsd24h}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        FTTList.map(data => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.bid}</td>
                                    <td>{data.ask}</td>
                                    <td>{data.price}</td>
                                    <td>{data.underlying}</td>
                                    <td>{data.volumeUsd24h}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        ADAList.map(data => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.bid}</td>
                                    <td>{data.ask}</td>
                                    <td>{data.price}</td>
                                    <td>{data.underlying}</td>
                                    <td>{data.volumeUsd24h}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                }
            </table>
        </div>
    )
}

export default PageB
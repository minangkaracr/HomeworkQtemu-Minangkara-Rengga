import { useEffect, useState } from "react"

export default function CurrencyFreaks(){
    const [dataCurrency, setDataCurrency] = useState([])
    console.log(dataCurrency)
    useEffect(() => {
        getData()
    }, [])

    const getData = async () =>{
        try {
            const dataAPI = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=6f9cbd3328fd4c1498f87c0d75b46449")
            // const dataAPI = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            const result = await dataAPI.json(dataAPI)
            
            setDataCurrency(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <h1 className="d-flex justify-content-center">Ini adalah Currency</h1>
                
                {/* {
                    dataCurrency.length === 0 ? (<img src="https://i.gifer.com/CVyf.gif" alt="loading" />) : (<p>{JSON.stringify(dataCurrency.rates["CAD"])}</p>)
                } */}

            </div>
        </>
    )
}
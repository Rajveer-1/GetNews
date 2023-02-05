import React, { Component } from 'react'
import NewsApp from './NewsApp'
import Spinner from './Spinner'
export class News extends Component {
    articles = [{


        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Aya Elamroussi",
        "title": "Life-threatening cold has moved into the Northeast as South reels from ice storm - CNN",
        "description": "A brutal blast of dangerously cold winds is expected to sweep across the Northeast and New England on Friday, prompting officials to close schools and activate emergency plans as the region braces for record-breaking sub-zero temperatures.",
        "url": "https://www.cnn.com/2023/02/03/weather/winter-storm-northeast-new-england-friday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230203124122-weather-new-york-0201.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-03T08:55:00Z",
        "content": "A brutal blast of dangerously cold winds is expectedto sweep across the Northeast and New England on Friday, prompting officials to close schools and activate emergency plans as the region braces for… [+6225 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Natasha Turak",
        "title": "Blackouts, currency dives and corruption: Pakistan's economy is on the brink of collapse - CNBC",
        "description": "Pakistan's foreign currency reserves are so depleted it has only enough to pay for roughly three weeks of imports.",
        "url": "https://www.cnbc.com/2023/02/03/blackouts-currency-dives-and-corruption-pakistans-economy-is-on-the-brink-of-collapse-.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107182585-1674503135667-gettyimages-1246473901-AFP_337N7QH.jpeg?v=1675412264&w=1920&h=1080",
        "publishedAt": "2023-02-03T08:17:44Z",
        "content": "People light a bonfire to warm themselves during a nationwide power outage, in Muzaffarabad on January 23, 2023.\r\nPakistan's economy is on a cliff-edge. \r\nThe South Asian country this week suffered a… [+6836 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "China Responds To Pentagon Allegations Over Spy Balloon Tracker Spotted In Western USA | USA News - CNN-News18",
        "description": "China Responds To Pentagon Allegations Over Spy Balloon Tracker Spotted In Western USA | USA NewsThe Pentagon has said it is tracking a Chinese spy balloon f...",
        "url": "https://www.youtube.com/watch?v=0OlxjceD-X0",
        "urlToImage": "https://i.ytimg.com/vi/0OlxjceD-X0/maxresdefault_live.jpg",
        "publishedAt": "2023-02-03T07:03:59Z",
        "content": null
    },
    {
        "source": {
            "id": "independent",
            "name": "Independent"
        },
        "author": "Oliver O'Connell",
        "title": "Alex Murdaugh trial - live: Defendant confronted about ‘missing’ $792k in law firm fees hours before murders - The Independent",
        "description": "Seventh day of testimony to resume in Walterboro, Colleton County, South Carolina where Alex Murdaugh stands trial for murders of wife Maggie and son Paul",
        "url": "https://www.independent.co.uk/news/world/americas/crime/alex-murdaugh-trial-jeanne-seckinger-money-latest-b2274979.html",
        "urlToImage": "https://static.independent.co.uk/2023/02/01/18/SEI142421215.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2023-02-03T05:02:53Z",
        "content": "Alex Murdaughs best friend breaks down speaking about attorneys financial crimes\r\nAlex Murdaughs former best friend of 40 years broke down in tears in court on Thursday as he described the moment tha… [+852 chars]"
    },

    ]

    constructor() {
        //super must be called when constructor is created 
        super();
        console.log("Hello i get all the news");
        this.state = {
            articles: this.articles,
            loading: false,
            page:1,

        }
    }
    async componentDidMount() {
       
        
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5358e5e9fb594694ac01b1c1f251a9ae&page=1&pageSize=9"
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles,totalResults:parseData.totalResults,loading:false })

}
    handleNextClick = async() => {
        if(this.state.page+1>Math.ceil(this.state.totalResults/9)){
        }
        else{
        console.log("I click on the next button");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5358e5e9fb594694ac01b1c1f251a9ae&page=${this.state.page+1}&pageSize=9`
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles,  page:this.state.page+1,loading:false })
        }  
    }
    handlePrevClick = async() => {
        
        
        console.log("I click on the previous button");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5358e5e9fb594694ac01b1c1f251a9ae&page=${this.state.page-1}&pageSize=9`
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,  page:this.state.page-1,loading:false })
        
    }
    render() {
        return (

            <div className="container ">
                <h1 className="text-center " style={{ color: 'white' }}>Get the Latest News first</h1>
                {this.state.loading&&<Spinner/>}
                <div className="row ">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col md-4" key={element.url}>
                            <NewsApp title={!element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div> 
                  })}


                
                <div className="container d-flex justify-content-between ">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-light b-3" onClick={this.handlePrevClick}>&#x2190;Previous</button>
                    <button type="button" className="btn btn-light " onClick={this.handleNextClick}>Next&#x2192;</button>
                </div>
            </div>
            </div>
        )
    }
}

export default News
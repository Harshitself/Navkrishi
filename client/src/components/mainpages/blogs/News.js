import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import './News.css'


export class News extends Component {

    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Major earthquake hits Turkey, Syria; hundreds dead, many trapped - Reuters",
            "description": "More than 1,400 people were killed and thousands injured on Monday when a huge earthquake struck central Turkey and northwest Syria, pulversing apartment blocks and heaping more destruction on Syrian cities already devastated by years of war.",
            "url": "https://www.reuters.com/world/middle-east/major-earthquake-strikes-turkey-syria-about-200-dead-many-trapped-2023-02-06/",
            "urlToImage": "https://www.reuters.com/resizer/JHZ9mM9liDQxMGN-wv1yFDuWw5M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5I3TTA2ZABKTHB5SBLNPURAHJY.jpg",
            "publishedAt": "2023-02-06T12:33:00Z",
            "content": "ADANA, Turkey/DAMASCUS, Feb 6 (Reuters) - More than 1,400 people were killed and thousands injured on Monday when a huge earthquake struck central Turkey and northwest Syria, pulversing apartment blo… [+5844 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Mike Wall",
            "title": "Watch SpaceX launch big communications satellite on today after weather delay - Space.com",
            "description": "Liftoff is scheduled for 5:32 p.m. ET.",
            "url": "https://www.space.com/spacex-launch-hispasat-communications-satellite",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/Yyqi7Z5skc5UnbUXBGrwac-1200-80.jpg",
            "publishedAt": "2023-02-06T12:32:40Z",
            "content": "SpaceX plans to launch a commercial communications satellite to orbit on Monday (Feb. 6), and you can watch the action live.\r\nA Falcon 9 rocket carrying the Amazonas Nexus satellite for the Spanish c… [+3087 chars]"
        }
    ];


    static defaultProps = {
        country: 'in',
        pagesize: 6
      };
      
      static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number
      };
      
      constructor() {
        super();
        this.state = {
          articles: this.articles,
          loading: false,
          page: 1
        };
      }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=551096ffa44c4d6a93a83a89d2362f3f&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        console.log(data);
        let parseddata = await data.json();
      
        this.setState({ 
            // articles: parseddata.articles,
            totalResults:parseddata.totalResults,
        loading:false
        });
    }

    handleprev = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=551096ffa44c4d6a93a83a89d2362f3f&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseddata = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles,
            loading:false
        })
    }
    handlenext = async () => {


        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=551096ffa44c4d6a93a83a89d2362f3f&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseddata = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parseddata.articles,
           loading:false
        })
    

    }

    render() {
     
        return (
            <>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</head>

            <div className='container my-3 md-4' >
                <h2 className='text-center'>Top Articles</h2>
              { this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>

                    })}

                </div>
                <div className='d-flex justify-content-between'>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleprev}> &larr; previous</button>
                    <button type="button" disabled={this.state.page +1 > Math.ceil(this.props.pagesize)} className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
                </div>
            </div>
            </>
        )
    }
}

export default News
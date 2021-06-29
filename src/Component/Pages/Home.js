import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, CardGroup, Button } from 'react-bootstrap';
import "./Home.css";
import Carousel from 'react-3d-carousels';










export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: [],
            err: " ",
            array: [],
            firstCard: {},
            secondCard: {},
            thirdCard: {},
            forthcard: {},
            fifthcard: {},



            text: 'Set in 2152, two years before the events of the film, Avatar: The Game starts out with a new signals specialist.',
            heroimg: "https://wallpapercave.com/wp/wp6520697.jpg"


        }
    }




    componentDidMount = async () => {
        let array = [
            { url: "https://wallpaper.dog/large/10907.png", desc: 'The player can select from four difficulty levels: Walk on the Beach, Combat Op, Suicide Mission, and the hardest difficulty, FUBAR, which is only unlocked after completing the game on Suicide Mission.[1] Various new weapons and equipment become available as the game progresses, some dropped by downed enemies.' },
            { url: "https://www.destructoid.com/wp-content/uploads/2021/06/dead-space-rumor.jpg", desc: 'Saints Row: The Third is an action-adventure game[2][3] played from the third-person perspective[4] in an open world,[3] such that players explore an unrestricted environment' },
            { url: "https://wallpapercave.com/wp/wp6122114.jpg", desc: 'Set in 2152, two years before the events of the film, Avatar: The Game starts out with a new signals specialist, named Able Ryder, arriving at Pandora, assigned to an area called Blue Lagoon, a large piece of jungle, fenced in to make sure no larger predators get inside.' },
            { url: "https://wallpapercave.com/wp/wp6800972.jpg", desc: 'Super Meat Boy is a platform game in which players control a small, dark red, cube-shaped character named Meat Boy, who must save his cube-shaped, heavily bandaged girlfriend Bandage Girl from the evil scientist Dr. Fetus' },
            { url: "https://wallpapercave.com/wp/wp6520697.jpg", desc: ' The Sonic franchise is known for its large cast of characters;[187] Sonic the Fighters (1996) producer Yu Suzuki joked that anyone who makes a Sonic game has the duty to create new characters.[188] The first game introduced Sonic, a blue hedgehog who can run at incredible speeds, and Doctor Eggman, a rotund mad scientist.' }
        ]


        // let server = process.env.React_APP_SERVER;
        let homeUrl = `https://api.rawg.io/api/games?key=995491d1a18f47709f7ba3b66bce85c1&page=1&page_size=40`;
        axios
            .get(homeUrl)
            .then((result => {
                let gamedata = result.data.results;



                let sortGame = gamedata.sort(function (a, b) {
                    return b.ratings_count - a.ratings_count;
                });

                this.setState({
                    game: gamedata,
                    array: array,
                    firstCard: sortGame[0],
                    secondCard: sortGame[1],
                    thirdCard: sortGame[2],
                    forthcard: sortGame[3],
                    fifthcard: sortGame[4],

                })


            }))
            .catch((err) => {
                this.setState({ err: 'there is no games' })
            })



    }
    redirect = () => {

    }
    handleChange = (idx) => {
        let array = [
            { url: "https://wallpaper.dog/large/10907.png", desc: 'The player can select from four difficulty levels: Walk on the Beach, Combat Op,  and the hardest difficulty.' },
            { url: "https://www.destructoid.com/wp-content/uploads/2021/06/dead-space-rumor.jpg", desc: 'Saints Row: The Third is an action-adventure game played from the third-person perspective in an open world.' },
            { url: "https://wallpapercave.com/wp/wp6122114.jpg", desc: 'Set in 2152, two years before the events of the film, Avatar: The Game starts out with a new signals specialist.' },
            { url: "https://wallpapercave.com/wp/wp6800972.jpg", desc: 'Super Meat Boy is a platform game in which players control a small, dark red, cube-shaped character named Meat Boy.' },
            { url: "https://wallpapercave.com/wp/wp6520697.jpg", desc: ' The Sonic franchise is known for its large cast of characters; Sonic the Fighters (1996) producer Yu Suzuki joked .' }
        ]

        // console.log();
        this.setState({
            heroimg: array[idx].url,
            text: array[idx].desc,
        })



    }



    render() {
        return (
            <>
                {console.log(this.state.d)}
                <div className='heroBox'>


                    <div className='rightBar'>

                        {this.state.array.map((item, idx) => {

                            return (
                                <Card style={{ width: '100%' }} className='abd'  >
                                    <Card.Img variant="top" style={{ height: '5.5rem' }} src={item.url} onClick={() => this.handleChange(idx)}
                                    />

                                </Card>
                            )

                        })}
                    </div>


                    <div className='leftImage' >
                        <Card className='abd' style={{ width: '100%', }}>
                            <Card.Img variant="maina" className='imagemain' style={{ height: '28rem' }} src={this.state.heroimg} />
                            {/* <Button className='butHome' variant="primary" style={{ width: '5rem', }} >Primary</Button> */}
                            <div className='carddiv'>
                                <Card.Text className='textHome' style={{ width: '80%', }}>
                                    {this.state.text}
                                </Card.Text>

                            </div>

                        </Card>
                    </div>

                </div>
                <div className='Top10'>

                    <Card className='trendingword'>
                        <Card.Body className='cardbodyyy'>Top 10 Games</Card.Body>
                    </Card>
                </div>


                <div className='carousel3d'>

                    <div className='carouselDiv'
                        style={{
                            width: 300,
                            height: 300,
                            margin: '0 auto'
                        }}
                    >
                        <Carousel className='carouselDiv'


                            ref={carousel => (this.carousel = carousel)}

                            width={400}
                            height={300}
                            direction={'horizontal'}
                            effect={'3d'}
                            index={0}

                        >


                            <img src="https://wallpapercave.com/wp/wp2680822.jpg" alt='first' className='cars' data-interval="2" />
                            <img src="https://wallpapercave.com/wp/wp2605477.jpg" alt='first' className='cars' data-interval="1" />
                            <img src="https://wallpapercave.com/wp/wc1765288.jpg" alt='first' className='cars' data-interval="1" />
                            <img src="https://wallpapercave.com/wp/wp2916055.jpg" alt='first' className='cars' data-interval="1" />
                            <img src="https://wallpapercave.com/wp/wp2928748.jpg" alt='first' className='cars' data-interval="1" />
                            <img src="https://images.alphacoders.com/926/thumbbig-926724.webp" alt='first' className='cars' data-interval="1" />
                            <img src="https://images2.alphacoders.com/926/thumbbig-926635.webp" alt='first' className='cars' data-interval="1" />
                            <img src="https://images7.alphacoders.com/926/thumbbig-926636.webp" alt='first' className='cars' data-interval="1" />
                            <img src="https://images4.alphacoders.com/926/thumbbig-926633.webp" alt='first' className='cars' data-interval="1" />

                        </Carousel>


                    </div>
                </div>

                <div>

                    <Card className='trendingword'>
                        <Card.Body className='cardbodyyy'>Trending Games</Card.Body>
                    </Card>
                </div>
                <div className='trending'>




                    <CardGroup>
                        <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.firstCard.background_image} />
                            <Card.Body>
                                <Card.Title className="textCard">{this.state.firstCard.name}</Card.Title>
                                {/* <Card.Text> 
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren">
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.secondCard.background_image} />
                            <Card.Body >
                                <Card.Title className="textCard">{this.state.secondCard.name}</Card.Title>
                                {/* <Card.Text> 
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.thirdCard.background_image} />
                            <Card.Body >
                                <Card.Title className="textCard">{this.state.thirdCard.name}</Card.Title>
                                {/* <Card.Text> 
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren">
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.forthcard.background_image} />
                            <Card.Body >
                                <Card.Title className="textCard">{this.state.forthcard.name}</Card.Title>
                                {/* <Card.Text> 
                                </Card.Text> */}
                            </Card.Body>
                        </Card>  <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.fifthcard.background_image} />
                            <Card.Body >
                                <Card.Title className="textCard">{this.state.fifthcard.name}</Card.Title>
                                {/* <Card.Text> 
                                </Card.Text> */}
                            </Card.Body>
                        </Card>

                    </CardGroup>




                </div>

                <div>
                    <Card className='trendingword'>
                        <Card.Body className='cardbodyyy'>Recently Released</Card.Body>
                    </Card>
                </div>
                <div className='released'>

                    <CardGroup>
                        <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://repack-games.com/wp-content/uploads/2021/06/Dungeons-Dragons-Dark-Alliance-Repack-Games.jpg' />
                            <Card.Body>
                                <Card.Title className="textCard">Dungeons & Dragons: Dark Alliance </Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren">
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/05/ScarletNexus_Inline2.jpg?w=1200' />
                            <Card.Body >
                                <Card.Title className="textCard">Scarlet Nexus</Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://cdn1.epicgames.com/snapdragon/offer/M3_Editions_ExpansionPass-3840x2160-723afb6397a0bb817b6409d8d1478cd2d4432478.jpg?h=270&resize=1&w=480' />
                            <Card.Body >
                                <Card.Title className="textCard">Metro Exodus: Complete Edition</Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren">
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://www.allkeyshop.com/blog/wp-content/uploads/buy-cthulhu-saves-christmas-cd-key-compare-prices.jpg' />
                            <Card.Body >
                                <Card.Title className="textCard">Cthulhu Saves Christmas</Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>  <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://m.media-amazon.com/images/M/MV5BZjZhMzA1ZjYtMWZjOS00MzdjLWFlM2QtNWVmOWFjMmMwZTRjXkEyXkFqcGdeQXVyMjQxNzM0MjI@._V1_.jpg' />
                            <Card.Body >
                                <Card.Title className="textCard">
                                    VERDUN</Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>

                    </CardGroup>




                </div>
                <div>
                    <Card className='trendingword'>
                        <Card.Body className='cardbodyyy'>Coming Soon

                        </Card.Body>
                    </Card>
                </div>
                <div className='comingsoon'>





                    <CardGroup>
                        <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://ksr-ugc.imgix.net/assets/025/227/398/65f6842fc3a4cd6b7ddec5955346d785_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1558524131&auto=format&frame=1&q=92&s=180613fff9d0a1828999ef7fef96c4e5' />
                            <Card.Body>
                                <Card.Title className="textCard">Unbound: Worlds Apart
                                </Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren">
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://sm.ign.com/t/ign_in/news/t/the-anacru/the-anacrusis-officially-announced-former-valve-writer-chet_7q9y.1200.jpg' />
                            <Card.Body >
                                <Card.Title className="textCard">The Anacrusis
                                </Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJog8-31WTwJNoWMpKm9xMlCGKvFmsJPCj_Z_J36Jc0YB2lQ-exmQ1YUlr-Ww4w6KMDRE&usqp=CAU' />
                            <Card.Body >
                                <Card.Title className="textCard">Swords of Legends Online
                                </Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className="tren">
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://www.hrkgame.com/media/games/.thumbnails/header_8ijSc4m.jpg/header_8ijSc4m-800x500.jpg' />
                            <Card.Body >
                                <Card.Title className="textCard">Timberborn</Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>  <Card className="tren" >
                            <Card.Img variant="top" style={{ height: '12rem' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMFPweDkjMVzjXRNQVivQAFxc-CWB2uQ2q99S6Bl-67NueW_CvfpPy_7ZNo5crCimSis&usqp=CAU' />
                            <Card.Body >
                                <Card.Title className="textCard">
                                    Tower of Guns
                                </Card.Title>
                                {/* <Card.Text> 
            </Card.Text> */}
                            </Card.Body>
                        </Card>

                    </CardGroup>




                </div>
                <div className='buttonHome'>


                    <Button className='linkbutton' href="/store" variant="primary" size="lg" active>
                        Explore More Games
                    </Button>
                </div>
                
                


            </>
        )
    }
}
export default Home;
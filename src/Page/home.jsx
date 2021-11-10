import React from 'react'
import {
    FormControl,
    InputGroup,
    Button,
    Table,
    Dropdown,
    Card
} from 'react-bootstrap'
import Axios from 'axios'

import { PHOTO, IMG_5, IMG_1, IMG_17 } from '../assets'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            data : []

        }
    }
    
    getData = () => {
        Axios.get(`https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty`)
            .then(res => {
                console.log(res.data) //ok
                this.setState({ data : res.data})
            })
            .catch(err => {
                console.log(err + 'Eror GET DATA')
            })

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <h1>Top Stories</h1>
                <Card style={{ width: '20rem', marginLeft: '8vw', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/email-message-inbox-notification-on-laptop-screen-business-background-picture-id1229883762?b=1&k=20&m=1229883762&s=170667a&w=0&h=28x3ibf2iGnsC-07X_CIqKkrIIel4uuicWAzmQlN09Y=" />
                    <Card.Body >
                        <Card.Text style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Button style={styles.btn} variant="warning" >Link Berita</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div>

                </div>
            </div>
        )
    }
}

const styles = {
    btn: {
        margin: '1vh',
        width: '12vw',
        marginLeft: '5vw',
        marginBottom: '4vh',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.12)',
        borderRadius:'30px 30px'
    },
}

export default Home
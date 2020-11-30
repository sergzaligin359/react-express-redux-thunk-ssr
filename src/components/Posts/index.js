import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchUsers } from "../../redux/action";
import { Loading } from '../common/Loading';

const m = ({ posts, users }) => ({ posts, users });


@connect(m, { fetchPosts, fetchUsers })
export default class Posts extends Component {

    static fetching ({ dispatch }) {
        return [dispatch(fetchPosts()), dispatch(fetchUsers())];
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers();
    }

    render(){
        // console.log(this.props.users);
        if(this.props.posts.posts < 1) {
            return <Loading />;
        }

        return (
            <div>
                {
                    this.props.users.users.map((el) => {
                        return (
                            <div key={ el.id } >
                                <h6>{ el.name }</h6>
                            </div>
                        )
                    })
                }
                {
                    this.props.posts.posts.map((el) => {
                        return (
                            <div key={ el.id } >
                                <h3>{ el.title }</h3>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

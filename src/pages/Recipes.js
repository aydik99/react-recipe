import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import {recipeData} from '../data/tempList'

export default class Recipes extends Component {
    constructor(props) {
        super(props)
        this.getRecipes = this.getRecipes.bind(this)
    }

    state = {
        recipes: recipeData,
        search: '',
        url:  `https://www.food2fork.com/api/search?key=${
            process.env.REACT_APP_API_KEY
        }`
    }

    async getRecipes() {
        try {

        } catch(error) {
            console.log(error)
        }
    }

    componentDidMount() {

    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <>
            <Search 
            search={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
            <RecipeList recipes={this.state.recipes} />
            </>
        )
    }
}

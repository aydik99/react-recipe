import React, { Component } from 'react'
import { recipeData } from '../data/tempList';

export default class SingleRecipe extends Component {
    
    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            recipe: recipeData,
            id,
            loading:false
        }
    }
    render() {
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingriedients
        } = this.state.recipe;

        return (
            <div>
                <h4>SinglePage</h4>
            </div>
        )
    }
}

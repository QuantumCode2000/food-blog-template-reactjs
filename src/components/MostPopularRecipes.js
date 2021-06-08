import React from 'react'
import './styles/MostPopularRecipes.css'

export default function MostPopularRecipes() {
    return (
        <>
            <div className="MostPopularRecipes">
                <p className="mostPopular_text">Most Popular Recipes</p>
                <div className="line"></div>
                <div className="RecipesCont"></div>
                <div className="pages"></div>
            </div>
        </>
    )
}

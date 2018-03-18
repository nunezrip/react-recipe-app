import React from 'react';
import axios from 'axios';
import Recipe from './Recipe';

const API_KEY = 'b1e2e3086bc7b16601f541716bc0bfc7';
const TRENDING_PATH_SEARCH = `http://food2fork.com/api/search?key=${API_KEY}&sort=t`;
const PAGE2_PATH_SEARCH = `http://food2fork.com/api/search?key=${API_KEY}&page=2`;

class Trending extends React.Component {
	state = {
		recipes: [],
	};

	TrendingReq = () => {
		axios
			.get(TRENDING_PATH_SEARCH)
			.then(res => {
				console.log(res.data.recipes);
				const recipes = res.data.recipes;
				this.setState(() => ({ recipes }));
			})
			.catch(err => {
				console.log(err);
			});
	};

	Page2Req = () => {
		axios
			.get(PAGE2_PATH_SEARCH)
			.then(res => {
				console.log(res.data.recipes);
				const recipes = res.data.recipes;
				this.setState(() => ({ recipes }));
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<h2>Trending Recipes</h2>
				<p>View the most sought after, and searhed for, recipes here.</p>
				<button type="submit" onClick={this.TrendingReq}>
					Trending
				</button>
				<button type="submit" onClick={this.Page2Req}>
					More
				</button>
				{this.state.recipes.map(recipe => {
					return (
						<Recipe
							key={recipe.recipe_id}
							title={recipe.title}
							publisher={recipe.publisher}
							publisher_url={recipe.publisher_url}
							rating={recipe.social_rank}
							source_url={recipe.source_url}
							f2f_url={recipe.f2f_url}
							RecipeImg={recipe.image_url}
						/>
					);
				})}
			</div>
		);
	}
}

export default Trending;

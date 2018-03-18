import React from 'react';
import axios from 'axios';
import Recipe from './Recipe';

const searchTerm = '';
const API_KEY = 'b1e2e3086bc7b16601f541716bc0bfc7';
const GENERAL_PATH_SEARCH = `http://food2fork.com/api/search?key=${API_KEY}&q=${searchTerm}`;

class Home extends React.Component {
	state = {
		searchTerm: '',
		recipes: [],
	};

	onSearchSubmit = event => {
		const { searchTerm } = this.state;
		this.SearchReq(searchTerm);
		event.preventDefault();
	};

	SearchReq = searchTerm => {
		axios
			.get(GENERAL_PATH_SEARCH)
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
				<h2>HELLO!</h2>
				<p>Welcome to FRS - your favorite Food Recipe Search engine!</p>

				<p>
					FRS makes it easy to find great recipes. Search by name or View
					Trending or Top Socially Ranked Recipes.
				</p>
				<form
					id="search-form"
					onSubmit="console.log('form submitted'); return false">
					<input
						type="text"
						value=""
						id="search-term"
						placeholder="Enter recipe name"
					/>
				</form>
				<button type="submit" onClick={this.onSearchSubmit}>
					Search
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

export default Home;

import React from 'react';

const Recipe = props => (
	<div className="recipe-container">
		<div>
			<h3>{props.title}</h3>
		</div>
		<div className="image-resutls-container">
			<div className="img-container">
				<img src={props.RecipeImg} alt="Recipe" className="recipeImg" />
			</div>
			<div className="resutls-container">
				<li>
					<strong>Rating: </strong>
					{Math.floor(props.rating)}
				</li>
				<li>
					<strong>Publisher: </strong>
					{props.publisher}
				</li>

				<li>
					<strong> Publisher URL: </strong>
					{props.publisher_url}
				</li>
				<li>
					<strong> Source URL: </strong>
					{props.source_url}
				</li>
				<li>
					<strong> Ingredients and Preparation from f2f: </strong>
					{props.f2f_url}
				</li>
			</div>
		</div>
	</div>
);

export default Recipe;

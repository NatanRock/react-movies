import React from 'react';
import { Movies, Preloader, Search } from '../components/';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {
	state = {
		movies: [],
		loading: true,
	};

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
			.then((res) => res.json())
			.then((data) =>
				this.setState({ movies: data.Search, loading: false })
			)

			.catch((err) => {
				console.log(err)
				this.setState({ loading: false })
			});
	}


	searchMovies = (str, type = 'all') => {
		this.setState({ loading: true });
		fetch(
			`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then((res) => res.json())
			.then((data) =>
				this.setState({ movies: data.Search, loading: false })
			)
			.catch((err) => {
				console.log(err)
				this.setState({ loading: false })
			});
	};

	render() {
		const { loading } = this.state;

		return (
			<main className='content'>
				<div className='container'>
					<Search
						searchMovies={this.searchMovies}
						searchFilter={this.searchFilter}
					/>
					{loading ? (
						<Preloader />
					) : (
						<Movies movies={this.state.movies} />
					)}
				</div>
			</main>
		);
	}
}

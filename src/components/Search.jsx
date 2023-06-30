import React from 'react';

export class Search extends React.Component {
	state = {
		search: '',
		type: 'all',
	};

	searchHandler = (e) => {
		this.setState({ search: e.target.value });
	};

	keyHandler = (e) => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	};

	radioButtonsHandler = (e) => {
		this.setState(
			() => ({ type: e.target.dataset.type }),
			() => {
				this.props.searchMovies(this.state.search, this.state.type);
			}
		);
	};

	render() {
		return (
			<div className='row'>
				<div className='input-field col s12'>
					<input
						placeholder='search...'
						value={this.state.search}
						id=''
						className='validate'
						type='search'
						onChange={this.searchHandler}
						onKeyDown={this.keyHandler}
					/>

					<button
						className='btn btn-search'
						onClick={() =>
							this.props.searchMovies(
								this.state.search,
								this.state.type
							)
						}
					>
						Search
					</button>
					
				</div>
				<div className='input-field col s12'>
					<div className='radio-buttons'>
						<label>
							<input
								data-type='all'
								class='with-gap'
								name='type'
								type='radio'
								onChange={this.radioButtonsHandler}
								checked={this.state.type === 'all'}
							/>
							<span>All</span>
						</label>
						<label>
							<input
								data-type='movie'
								class='with-gap'
								name='type'
								type='radio'
								onChange={this.radioButtonsHandler}
								checked={this.state.type === 'movie'}
							/>
							<span>Movies only</span>
						</label>
						<label>
							<input
								data-type='series'
								class='with-gap'
								name='type'
								type='radio'
								onChange={this.radioButtonsHandler}
								checked={this.state.type === 'series'}
							/>
							<span>Series only</span>
						</label>
					</div>
				</div>
			</div>
		);
	}
}

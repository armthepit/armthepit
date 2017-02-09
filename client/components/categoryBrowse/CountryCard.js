import React from 'react';
import { Link } from 'react-router';

export default function CountryCard({ country }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">
				<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{country.title}" />
					<div className="content">
 						<Link to={`/browsecountry/${country.link}`}>
							{country.title}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

CountryCard.propTypes = {
	country: React.PropTypes.object.isRequired
}

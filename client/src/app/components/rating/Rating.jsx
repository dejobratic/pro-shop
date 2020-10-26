import React from "react"
import PropTypes from "prop-types"

import "app/components/rating/rating.css"

const transformToArrayOfUnits = (value) => {
	const maxValue = 5
	const roundedDownValue = Math.floor(value)

	const wholes = Array(roundedDownValue).fill(1)
	const halves = Array(Math.ceil(value - roundedDownValue)).fill(0.5)
	const zeros = Array(maxValue - wholes.length - halves.length).fill(0)

	return [...wholes, ...halves, ...zeros]
}

const Rating = ({ value, text, color }) => {
	const ratingUnits = transformToArrayOfUnits(value)

	return (
		<div className="rating">
			{ratingUnits.map((unit, index) => (
				<span key={index}>
					<i
						style={{ color }}
						className={
							unit === 1
								? "fas fa-star"
								: unit === 0.5
								? "fas fa-star-half-alt"
								: "far fa-star"
						}
					></i>
				</span>
			))}
			<span>{text && text}</span>
		</div>
	)
}

Rating.defaultProps = {
	value: 0,
	text: "[description]",
	color: "#f8e825",
}

Rating.propTypes = {
	value: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
}

export default Rating

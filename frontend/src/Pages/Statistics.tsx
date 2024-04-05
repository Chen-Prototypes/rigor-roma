import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { UserState } from '../types';
// import Heatmap from '../Components/Heatmap';

const Statistics: React.FC = () => {
	// const data = Array.from({length: 365}, () => Math.floor(Math.random() * 10)); // For Heatmap

	const user = useSelector<RootState, UserState | null>((state) => state.user);

	const parseLocalDate = (dateString: string) => {
		const [year, month, day] = dateString
			.split('-')
			.map((s) => parseInt(s, 10));
		return new Date(year, month - 1, day);
	};

	const formatDate = (date: Date) => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		return date.toLocaleDateString(undefined, options);
	};

	if (!user)
		return (
			<div className="mt-20 container mx-auto px-4">
				<div className="text-center">
					<h5>Login to see your statistics.</h5>
				</div>
			</div>
		);

	return (
		<div className="flex justify-center items-center min-h-screen flex-col mt-5">
			<div className="shadow-lg rounded-lg overflow-hidden">
				<table className="min-w-full leading-normal">
					<thead>
						<tr>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
								Date
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
								Minutes Focused
							</th>
						</tr>
					</thead>
					<tbody>
						{user.rigor.map((time) => (
							<tr key={time.date}>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									{formatDate(parseLocalDate(time.date))}
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									{time.minutesFocused} minutes
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{/* <Heatmap data={data} /> Uncomment and ensure Heatmap is styled or adapted for TailwindCSS */}
		</div>
	);
};

export default Statistics;

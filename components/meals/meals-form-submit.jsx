'use client';
import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit(params) {
	const { pending } = useFormStatus();

	return (
		<button disabled={pending} type="submit">
			{pending ? 'Submitting...' : 'Share Meal'}
		</button>
	);
}

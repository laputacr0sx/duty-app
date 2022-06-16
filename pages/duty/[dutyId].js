import { useRouter } from 'next/router';

const Post = () => {
	const router = useRouter();
	const { dutyId } = router.query;

	return <p>DUTY: {dutyId}</p>;
};

export default Post;

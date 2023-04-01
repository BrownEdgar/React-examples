import ContentLoader from 'react-content-loader'

const MyLoader = () => (
	<ContentLoader
		speed={2}
		width={700}
		height={460}
		viewBox="0 0 700 460"
		backgroundColor="#b9c0bc"
		foregroundColor="#5f917a"
		
	>
		<rect x="58" y="34" rx="2" ry="2" width="472" height="34" />
		<rect x="58" y="79" rx="2" ry="2" width="472" height="34" />
		<rect x="58" y="127" rx="2" ry="2" width="472" height="34" />
		<rect x="57" y="172" rx="2" ry="2" width="472" height="34" />
	</ContentLoader>
)

export default MyLoader
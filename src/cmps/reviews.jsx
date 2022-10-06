export const Reviews = () => {

    const reviews = [
        {
            fullname: 'Kady Baker',
            job: 'Product Manager at Bookmark',
            txt: ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
            imgUrl: 'https://res.cloudinary.com/ibarak/image/upload/v1665053913/hl8ef9gpr9acouw4wimt.jpg',
        },
        {
            fullname: 'Aiysha Reese',
            job: 'Founder of Manage',
            txt: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
            imgUrl: 'https://res.cloudinary.com/ibarak/image/upload/v1665053913/ebtpecaci76rpkpookjp.jpg',
        },
        {
            fullname: 'Arthur Clarke',
            job: 'Co-founder of MyPhysio',
            txt: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
            imgUrl: 'https://res.cloudinary.com/ibarak/image/upload/v1665053913/diudlh5pbx8s0ukbvyrg.jpg',
        },
    ]

    return (
        <div className="full reviews">
            <div className="wrapper-container">
                <div className="reviews-container">
                    <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                    <div className="review-cards">
                        {reviews.map(review => {
                            return <div className="review">
                                <img className="quotes" src='https://res.cloudinary.com/ibarak/image/upload/v1665055319/ea3jqyx3pfjqontn38jn.png'></img>
                                <p>{review.txt}</p>
                                <h5>{review.fullname}</h5>
                                <h6>{review.job}</h6>
                                <img className="img" src={review.imgUrl}></img>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

/* eslint-disable react/prop-types */


function RightSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}){
return (
    <div className="container">
            <div className="row ">
                <div className="col-6 p-5">
                <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div className="">
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px "}}>Learn more</a>
                    </div>

                    <div className="mt-3">
                    <a href={googlePlay}>
                    <img src="/media/images/googlePlayBadge.svg" alt="" />
                    </a>
                    <a href={appStore}>
                    <img src="media/images/appstoreBadge.svg" alt="" />
                    </a>
                    </div>
                </div>

                <div className="col-6">
                    <img src={imageURL} className="" alt="" />
                </div>
            </div>
        </div>
    
);
}

export default RightSection
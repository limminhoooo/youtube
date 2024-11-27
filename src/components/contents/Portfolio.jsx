import React from "react"

import {portfolioText} from "../../data/portfolio"
import {Link} from "react-router-dom"

const Port = () => {
    return (
        <section id="gsap">
             <h2>🤗 포트폴리오 만드는 방법을 공유합니다.</h2>
            <div className="video__inner">
                {portfolioText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Port

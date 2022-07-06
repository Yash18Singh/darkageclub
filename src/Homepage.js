import React, {useState} from 'react';
import './Homepage.css';


const Homepage = ()=>{
    return(
        <>
            <div className='home'>

                <section className='home__artwork1'>
                    <article className='home__artwork1_bg'>
                        <img src='https://res.cloudinary.com/yash-071/image/upload/v1657075633/NFT%20DAC/Artwork1_bfh1gg.png'/>
                    </article>

                    <article className='home__artwork1_icons'>
                        <img onClick={()=>window.open('https://twitter.com/darkageclubnft')} src='https://res.cloudinary.com/yash-071/image/upload/v1657075529/NFT%20DAC/art_25_bt1pwo.png'/>
                        <img onClick={()=>window.open('https://discord.gg/BcnAh7rq')} src='https://res.cloudinary.com/yash-071/image/upload/v1657075532/NFT%20DAC/art_26_smitsq.png'/>
                    </article>
                </section>

                <section className='home__artwork2'>
                    <article className='home__artwork2_bg'>
                        <img src='https://res.cloudinary.com/yash-071/image/upload/v1657085971/DAC%20WEBSITE/New_Project_51_w7pzxc.png'/>
                    </article>
                </section>

                <section className='home__artwork3'>
                    <article className='home__artwork3_bg'>
                        <img src='https://res.cloudinary.com/yash-071/image/upload/v1657086035/DAC%20WEBSITE/New_Project_42_r73gwh.png'/>
                    </article>

                    <article className='home__artwork3_Frames'>
                        <div onClick={()=>window.open('https://opensea.io/collection/darkageclub-ana')} className='home__artwork3_Frame1'>
                            <img className='home__artwork3_fr' src='https://res.cloudinary.com/yash-071/image/upload/v1657086033/DAC%20WEBSITE/New_Project_45_aic1fz.png'/>
                            <img className='home__artwork3_img' src='https://res.cloudinary.com/yash-071/image/upload/v1657075514/NFT%20DAC/art_24_vv8tgz.png'/>
                        </div>
                    </article>
                </section>

                <section className='home__artwork4'>
                    <img src='https://res.cloudinary.com/yash-071/image/upload/v1657088546/DAC%20WEBSITE/New_Project_55_f2iqvs.png'/>
                </section>

                <section className='home__artwork5'>
                    <article className='home__artwork5_bg'>
                        <img src='https://res.cloudinary.com/yash-071/image/upload/v1657089815/DAC%20WEBSITE/New_Project_56_b250v4.png'/>
                    </article>

                    <article className='home__artwork5_Frames'>
                        <div className='home__artwork5_Frame1'>
                            <img onClick={()=>window.open('https://www.instagram.com/siddotexe21/')} className='home__artwork3_fr' src='https://res.cloudinary.com/yash-071/image/upload/v1657089788/DAC%20WEBSITE/New_Project_59_qmsdo1.png'/>
                            <img onClick={()=>window.open('https://www.instagram.com/yashdotexe/')} className='home__artwork3_fr' src='https://res.cloudinary.com/yash-071/image/upload/v1657089788/DAC%20WEBSITE/New_Project_57_mu9bqp.png'/>
                            <img className='home__artwork3_fr' src='https://res.cloudinary.com/yash-071/image/upload/v1657089788/DAC%20WEBSITE/New_Project_58_pwtabh.png'/>
                        </div>
                    </article>
                </section>


            </div>
        </>
    )
}

export default Homepage;
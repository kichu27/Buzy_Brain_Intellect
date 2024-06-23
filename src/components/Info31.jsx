import React from 'react'
import "./styles/f.css";
import Highlight from './Highlight';

const contentArray = [
    {
      src: "h1.jpg" ,
      title: "Flexible Working from Anywhere:",
      description: "Embrace the flexibility of working from the place of your choice. BuzyBrain's franchise model offers you the freedom to manage your business on your terms, ensuring a perfect work-life balance."
    },
    {
      src: "h2.avif" ,

      title: "High Returns on Low Investment:",
      description: "The DBIT franchise is your gateway to substantial returns with a comparatively low investment. BuzyBrain envisions aspiring entrepreneurs taking control of their future by stepping into the realm of business ownership with confidence."
    },
    {
      src: "h3.avif" ,

      title: "Social Activities and Positive Impact:",
      description: "BuzyBrain is committed to creating a positive impact on society. As a franchise partner, you contribute to social activities, making a meaningful difference in the lives of individuals through our innovative and impactful programs."
    },
    {
      src: "h4.jpg" ,

      title: "Stress-Free Life and Successful Careers:",
      description: "Our unique concept aims to reach every individual, providing them with the tools to live a stress-free life and establish a successful career. As a franchisee, you play a crucial role in spreading this transformative vision. Seize the opportunity to grow with us, foster positive change, and build a business that aligns with your passion and values."
    },
    {
      src: "h5.avif" ,

      title: "Comprehensive Support and Training:",
      description: "BuzyBrain provides comprehensive support and training to franchise partners, ensuring a smooth and successful venture. Benefit from our expertise, marketing strategies, and ongoing guidance to make your entrepreneurial journey seamless."
    },
    {
      src: "h6.avif" ,

      title: "Guidance for Massive Earning Income:",
      description: "Our insightful team is dedicated to guiding you on the path to massive earning income. With a focus on the student's future, BuzyBrain ensures that your business not only thrives but contributes positively to the lives of those you serve."
    },
    {
      src: "h7.webp" ,

      title: "Empower Students with DBIT and STEP:",
      description: "Join us in empowering every student to excel in academics and beyond by offering franchises for our transformative programs - Dermatoglyphics Brain Intelligence Test (DBIT) and Spiritual Transformational Empowerment Program (STEP)."
    },
    {
      src: "h8.jpg" ,

      title: "Software Support and Scanner Inclusive:",
      description: "The DBIT franchise fees cover software support and include a scanner, providing you with the necessary tools for seamless operations."
    },
    {
      src: "h9.webp" ,

      title: "Lifetime Franchise Agreement with No Territory Restriction:",
      description: "Enjoy the advantages of a lifetime franchise agreement with the added benefit of no territory restriction. This ensures that your business has the potential to thrive without limitations."
    }
  ];

function Info31() {
  return (
<div className='subdiv1'>


<h1>Advantages of Choosing DBIT Franchise</h1>

<ul className='ulf'>
  <li>Management Support and Standard Training Programs.</li>
  <li>Software Support and Scanner Inclusive in Franchise Fees.</li>
  <li>Sales and Marketing Guidance with Operations Support.</li>
  <li>Life Time Franchise Agreement with No Territory Restriction.</li>
</ul>
<br/>
<br/>
<h1>Key Highlights of Choosing DBIT Franchise</h1>
{contentArray.map((item)=> {
return <Highlight src = {item.src} tit = {item.title} cont = {item.description} />
}
)}


<h4 id='outh'>
 
    BuzyBrain Intellect Private Limited invites you to seize this
    opportunity for entrepreneurial success. Become a part of the DBIT
    franchise family and embark on a journey where high returns,
    flexible working, and student empowerment converge. Your dream of
    business ownership awaits – let's build a successful future
    together.

</h4>
</div>
  )
}

export default Info31
import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src="images/hc1.png"
                text="Leverages unique preferences, interests, and daily habits to suggest the perfect roommates, making the search more efficient and stress-free."
                label='Intelligent Pairing Process'
                
                />
                <CardItem 
                src="images/hc2.png"
                text="Skip the stress of traditional roommate searches! Our advanced algorithm considers your routine, social habits, and personal preferences to connect you with like-minded flatmates—making co-living a breeze."
                label='Effortless Roommate Search'
                
                />
          </ul>
          <div className='hero-content'>
          <br>
          </br>
          <br></br>
        <div className='grey-card'>
          <h2>How to Find Your Ideal Flatmate with Flinder</h2>
          <p>Searching for the perfect roommate or shared flat doesn't have to be stressful. With Flinder, we've built a platform designed to simplify your search, match you with like-minded individuals, and eliminate unnecessary fees and confusion. Whether you're new in town or just looking to make a living situation more affordable and enjoyable, Flinder is your smart, secure, and user-friendly solution.</p>
          <h3>1. Search Smart, Live Better</h3>
          <p>Finding a compatible flatmate starts with the right location. Flinder makes this easy by allowing you to search in your preferred areas and filter results based on budget, lifestyle, and housing needs. Whether you're looking for a cozy flat to move into or trying to fill a spare room, our platform gives you the tools to explore and refine listings with ease.</p>
          <p>With detailed listings that include rent, amenities, and lifestyle preferences, you'll never be left guessing. Our interface is intuitive, so you can focus more on finding the right match and less on navigating a complicated site.</p>
          <h3>2. Skip the Fees, Not the Quality</h3>
          <p>At Flinder, we believe finding a flatmate shouldn't come with a hidden price tag. That's why all listings on our platform are 100% brokerage-free—no middlemen, no surprise charges. We connect you directly with verified users, making the entire experience transparent and affordable.</p>
          <p>We also offer match compatibility insights, helping you assess how well your personality and preferences align with potential flatmates. Whether you're looking for a social butterfly or someone who prefers quiet nights in, Flinder helps you make informed choices.</p>
          <h3>3. List Your Space with Confidence and Privacy</h3>
          <p>Not just looking? You can post your own listing too! Let others know what you're looking for by sharing your preferences, budget, and lifestyle details. But we also know how important privacy is—that's why we let you hide personal contact details until you're ready to connect.</p>
          <p>Flinder's secure messaging system ensures your conversations stay safe and spam-free. No need to share your phone number upfront—just list your requirements and let the right match find you.</p>
          <p>Start your journey with Flinder today—where living well starts with finding the right person to share your space.</p>
       <br></br>
        </div>
          </div>
          
            </div>
    </div>
    </div>
  )
}

export default Cards

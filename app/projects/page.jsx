"use client";
import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num:'01',
        category: 'Premier League Defense Analytics Dashboard',
        description: "This interactive Power BI dashboard provides detailed insights into the defensive performance of Premier League teams across multiple seasons. Users can filter data by season and team, with a primary focus on the top 6 teams. The dashboard showcases key defensive metrics, including: Card summaries showing total wins, losses, saves, and goals. A graph of defensive engagements such as dispossessed balls, head clearances, tackles, and interceptions. A pie chart representing the clean sheets for each team. A graph displaying penalties conceded and saved, organized by season. This tool allows users to explore defensive patterns and trends, with flexible filtering to include more teams beyond the top 6. The visualization emphasizes key aspects of defensive strategies and their impact across different seasons.",
        stack: [
            {name: 'PowerBI'}
        ],
        image: '/work/pl_dashboard.png',
        live: "",
        github: "https://github.com/OBahraoui/Premier-League-Analytics-Dashboard",
    },
    {
        num:'02',
        category: 'Machine Learning API in AWS Sagemaker for Penguin Species Classification',
        description: "In this project, I developed and deployed an XGBoost model using Amazon SageMaker to classify penguin species based on features like bill length, bill depth, flipper length, and body mass. I utilized S3 for data storage, SageMaker for model training and deployment, and created a REST API using AWS Lambda and API Gateway for real-time predictions. Python was used throughout the process for data exploration, feature engineering, model building, and API development. This project demonstrates my expertise in leveraging cloud services for machine learning, from data preprocessing to deployment and API integration.",
        stack: [
            {name: 'Python, AWS Sagemaker, lambda, S3, EC2'}
        ],
        image: '',
        live: "",
        github: "https://github.com/OBahraoui/AWS-Sagemaker-machine-learning-api-penguin-species-prediction/tree/main",
    },
    {
        num:'03',
        category: 'Tennis Players Analysis',
        description: "Conducted a comprehensive analysis of tennis players' performance data, focusing on players with over 50 matches. Cleaned and examined the dataset for duplicates and missing values, determining key statistics such as win-loss records, surface performance, and serving efficiency under pressure. Identified Ons Jabeur as a notable player, revealing her 74% win rate and best performance on grass courts. Analyzed serving statistics to determine the top servers in men’s and women’s tennis, utilizing visualizations to compare their metrics. Developed a regression model to predict match aces, achieving an R² score of 0.71, demonstrating a solid understanding of predictive analytics and data visualization techniques.",
        stack: [
            {name: 'Python'}
        ],
        image: '/work/tennis_project.png',
        live: "",
        github: "https://github.com/OBahraoui/Tennis-Players-Analysis/blob/main/Tennis_Players_Analysis.ipynb",
    },
    {
        num:'04',
        category: 'HR Analytics Dashboard',
        description: "This interactive Power BI dashboard provides comprehensive insights into workforce data, allowing users to filter information by age group, gender, and department. It highlights key metrics to assist in understanding employee dynamics, including: two pie charts displaying average monthly income by education field and travel frequency by employee count. A table that tracks job satisfaction levels, average monthly rate, and average years at the company, segmented by job role. A graph illustrating employee count and average monthly income per age group. Another graph showing attrition rates by education field. This dashboard serves as a powerful tool for HR professionals to analyze and visualize workforce trends, offering customizable views based on specific demographics and departments.",
        stack: [
            {name: 'PowerBI'}
        ],
        image: '/work/hr_dashboard.png',
        live: "",
        github: "https://github.com/OBahraoui/HR-Analytics-Dasbhoard",
    },
    {
        num:'05',
        category: 'Flask-based Image Classification Web Application',
        description: " Developed and deployed a Flask-based RESTful API on Render to classify images using a pre-trained CNN model with a 53.6% accuracy on the CIFAR10 dataset, and a responsive frontend built using HTML, CSS, and JavaScript. ▪ Used PyTorch for image preprocessing and model prediction, ensuring efficient cross-platform functionality and live demonstration capabilities.",
        stack: [
            {name: 'Python'}, {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, 
        ],
        image: '',
        live: "",
        github: "https://github.com/OBahraoui/Classification-Flask-APP",
    },
    {
        num:'06',
        category: 'Insurance Pricing Analysis',
        description: "Conducted a comprehensive analysis of insurance pricing using four CSV datasets. Consolidated data into a unified table, ensuring data integrity by removing duplicates and handling missing values. Explored relationships between various factors (e.g., insured amounts, number of bedrooms/bathrooms) and pricing through correlation analysis and visualizations. Employed decision trees to assess feature importance, revealing significant pricing trends influenced by market dynamics and insured amounts. Analyzed pricing variations among partners, providing insights into customer behavior and strategic recommendations to enhance market competitiveness.",
        stack: [
            {name: 'Python'}, {name: 'SQL'}
        ],
        image: '/work/insurance.png',
        live: "",
        github: "",
    },
    {
        num:'07',
        category: 'Hybrid Movie Recommendation System',
        description: "In this hybrid movie recommendation system project, I implemented a combination of content-based filtering, item-based collaborative filtering, and user-based collaborative filtering to recommend movies to users. First, I computed a weighted average score for each movie, incorporating both user ratings and the number of votes. The content-based recommendation system utilized TF-IDF and cosine similarity to suggest films based on movie genres and descriptions. For item-based recommendations, I transformed genre data into a sparse matrix and employed cosine similarity and KMeans clustering to find similar movies. Finally, the user-based collaborative filtering predicted movies based on the preferences of users with similar tastes, calculated using cosine similarity. This hybrid approach provides well-rounded recommendations, balancing individual movie content and user behavior patterns.",
        stack: [
            {name: 'Python'}
        ],
        image: '',
        live: "",
        github: "https://github.com/OBahraoui/Hybrid-Movie-Recommendation-System/blob/main/Hybrid_Movie_Recommendation_Sytem.ipynb",
    },
    {
        num:'08',
        category: 'Weather Forecast Predictions',
        description: "Analyzed a comprehensive weather dataset for various regions in Australia, employing Random Forest, Logistic Regression, and MLP neural network models to accurately predict temperature and next day rainfall. Evaluated model performance using standardized measurements, such as Mean Squared Error, Mean Absolute Error, accuracy, and R2, ensuring robust and reliable weather forecast predictions and generating 84% accuracy.",
        stack: [
            {name: 'Python'}
        ],
        image: '',
        live: "",
        github: "",
    },
    {
        num:'09',
        category: 'UK Loan Approval Synthetic Dataset',
        description: "As part of my internship, I developed a synthetic dataset to simulate loan approval scenarios for UK individuals, employing statistical methods to determine the likelihood of loan requests being approved or denied. The dataset encompassed various loan types, such as mortgages, auto loans, and student debt, with specific parameters for loan duration, existing loan amounts, credit history, delinquencies, and income stability. I meticulously crafted demographic variables, including age, occupation, education levels, and family status, to ensure a realistic representation. Key financial indicators like the Debt-to-Income (DTI) ratio, FICO score, and credit utilization were calculated using established guidelines. This comprehensive dataset enabled me to model loan approval decisions based on a range of factors, highlighting my ability to apply data-driven methodologies to real-world financial scenarios. (Please note that the code for this project cannot be shared as it is part of my internship work).",
        stack: [
            {name: 'Python'}
        ],
        image: '',
        live: "",
        github: "",
    },


];


const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper)=> {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration:0.4, ease:"easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index)=> {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length -1 && ","}
                                        </li>
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index)=>{
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                    <div className={`h-[460px] relative group flex justify-center items-center ${project.image ? 'bg-black/10' : 'bg-primary'}`}>
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                        {/* image */}
                                        {project.image ? (
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-contain" alt="Project image" />
                                            </div>
                                        ) : (
                                            // Fallback content when no image is present
                                            <div className="text-white text-2xl"></div>
                                        )}
                                    </div>
                                </SwiperSlide>
                                
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
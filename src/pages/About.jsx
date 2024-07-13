import { skills, languages, experiences } from '../constants'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';



const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello I'm <span className="blue-gradient_text"> Khang Tran</span>
            </h1>

            <div className="mt-5 flex flex-col gap-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet aliquam animi repellat eligendi, commodi nemo, voluptatum dolorum suscipit earum,
                    labore laboriosam optio nihil. Impedit repudiandae qui soluta iusto alias.</p>
            </div>
            <div className='py-5' />


            <div className=" py-5 flex flex-col">
                <h3 className="subhead-text"> Technical Languages</h3>
            </div>

            <div className="mt-16 flex flex-wrap gap-12">
                {languages.map((language) => (
                    <div className='block-container w-20 h-20'>
                        <div className='btn-back rounded-xl' />
                        <div className='btn-front rounded-xl flex justify-center items-center'>
                            <img
                                src={language.imageUrl}
                                alt={language.name}
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className='py-10' />

            <div className=" py-5 flex flex-col">
                <h3 className="subhead-text"> Technologies & Frameworks</h3>
            </div>

            <div className="mt-16 flex flex-wrap gap-12">
                {skills.map((skill) => (
                    <div className='block-container w-20 h-20'>
                        <div className='btn-back rounded-xl' />
                        <div className='btn-front rounded-xl flex justify-center items-center'>
                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                ))}
            </div>


            <div className='py-5' />


            <div className='py-5'>
                <h3 className='subhead-text'>
                    Work Experience
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet aliquam animi repellat eligendi, commodi nemo, voluptatum dolorum suscipit earum,
                        labore laboriosam optio nihil. Impedit repudiandae qui soluta iusto alias.</p>
                </div>


                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                dateClassName='text-black-500/50'
                                icon={
                                    < div className='flex justify-center items-center w-full h-full' >
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>}
                                iconStyle={{ background: experience.iconBg }}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none,'
                                }}
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`${experience.points}-${index}`}
                                            className='text-black-500/50 font-normal pl-1 text-sm'>{point}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>

                        ))};
                    </VerticalTimeline>

                </div >

            </div >

            {/*  creates a nice line to divide to the next session */}
            < hr className='border-slate-200' />
            <CTA />
        </section >
    )
}

export default About
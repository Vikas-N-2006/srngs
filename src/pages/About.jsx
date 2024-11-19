import "./About.css";
import boysHostel from "../assets/boysHostel.jpg";

const sections = [
  {
    title: "Inception of SRNG Sampannappa Charities",
    content: `SRNG Sampannappa Charities was established in the year 1943 out of the benevolence of late Sri. SRNG Sampannappa, hailing from a philanthropic Shivachara Nagartha merchant family. The founder bequeathed all his properties as per his Registered WILL dated 10th October 1941. Since its inception, the Charities has been rendering yeoman service to the student community. In line with the main objective outlined in the WILL, the Charities has been running a Free Hostel, providing boarding and lodging facilities for poor, needy, and deserving students, irrespective of caste & creed.`,
    image: "https://via.placeholder.com/400x300?text=Inception",
  },
  {
    title: "75 Years of Noble Service",
    content: `SRNG Sampannappa Charities has successfully completed 75 years of noble service to the community, empowering thousands of students from economically poor backgrounds to realize their dreams. To commemorate this milestone and pay tribute to the founder, the Board of Trustees celebrated the Platinum Jubilee in December 2018. A souvenir in the form of a coffee table book was also published, featuring information about the Trust, messages from leaders, articles by experts, and a photo gallery.`,
    image: "https://via.placeholder.com/400x300?text=75+Years",
  },
  {
    title: "SRNG Sampannappa Boys Hostel",
    content: `Presently, the Charities owns a Hostel cum Commercial complex at Nagarathpet, Bengaluru. The Hostel block accommodates about 90 students. 
    The facilities include: 
    --> 17 rooms equipped with cots, tables & chairs, Reading Room, Library & Computer lab, Modern kitchen, Dining hall with tables & chairs, Multipurpose hall with audio-visual facilities, Solar water heaters, purified drinking water, Well-maintained bathrooms & toilets, Indoor sports & Gymnasium, and DG set for uninterrupted power supply & Internet connectivity.`,
    image: boysHostel,
  },
  {
    title: "SRNG Sampannappa Girls Hostel",
    content: `The Trustees have embarked on a project to start a free hostel for girls with a total project outlay of Rs. 10 Crores. Two sites measuring 8000 sq.ft. with buildings have been purchased in Girinagar, Bengaluru, to house the Girls Hostel. Efforts are underway to begin operations in the academic year 2019-20.`,
    image: "https://via.placeholder.com/400x300?text=Girls+hostel",
  },
];

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-title'>About SRNG Sampannappa Charities</h1>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`section section-${index % 2 === 0 ? "even" : "odd"}`}>
          <h2 className='section-title'>{section.title}</h2>
          <div
            className={`content-with-image ${
              index % 2 === 0 ? "image-right" : "image-left"
            }`}>
            <div className='content'>
              <p>{section.content}</p>
            </div>
            <div className='image-container'>
              <img
                src={section.image}
                alt={section.title}
                className='section-image'
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default About;

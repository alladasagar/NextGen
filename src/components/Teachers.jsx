import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// TeacherCard Component
const TeacherCard = ({ teacher, index }) => (
    <div className="teachercard d-flex justify-content-between  align-items-center p-3">
        <div className="teacherimg">
            <img src={`/images/teacher${index + 1}.jpg`} alt={`Teacher ${index + 1}`} />
        </div>
        <div className="teacherdetails">
            <h2>{teacher.name}</h2>
            <h4>Subject: {teacher.subject}</h4>
            <h4>{teacher.qualification}</h4>
        </div>
    </div>
);

// ArrowButton Component
const ArrowButton = ({ direction, onClick, disabled }) => (
    <div className={`arrowimg ${disabled ? 'disabled' : ''}`} onClick={onClick}>
        <img src={`/images/${direction}-icon.png`} alt={`${direction} Arrow`} />
    </div>
);

// Teachers Component
const Teachers = () => {
    const teacherData = [
        { name: "John Doe", subject: "Science", qualification: "PhD in Physics" },
        { name: "Jane Smith", subject: "Mathematics", qualification: "MSc in Mathematics" },
        { name: "Alice Johnson", subject: "Chemistry", qualification: "PhD in Chemistry" },
        { name: "Mark Brown", subject: "Biology", qualification: "PhD in Biology" },
        { name: "Emily White", subject: "English", qualification: "MA in English" },
        { name: "David Green", subject: "History", qualification: "MA in History" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 2; // Number of cards visible at a time
    const cardWidth = 400; // Width of each card in pixels
    const totalCards = teacherData.length;

    const handleNext = () => {
        if (currentIndex + cardsPerPage < totalCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <h5 className="text-center">Our</h5>
            <h2 className="text-center text-primary mb-3"> Faculty Members</h2>
            <div className="teacher">
                
                {/* Teacher Cards */}
                <div className="teacher-container">
                    <div
                        className="teacher-scroll"
                        style={{
                            transform: `translateX(-${currentIndex * (cardWidth + 20)}px)` // Adjust for card width + margin
                        }}
                    >
                        {teacherData.map((teacher, index) => (
                            <TeacherCard key={index} teacher={teacher} index={index} />
                        ))}
                    </div>
                </div>
                <div className="arrows">
                     {/* Left Arrow */}
                 <ArrowButton direction="back" onClick={handlePrev} disabled={currentIndex === 0} />
                
                {/* Right Arrow */}
                <ArrowButton direction="next" onClick={handleNext} disabled={currentIndex >= totalCards - cardsPerPage} />
                </div>
            </div>
        </div>
    );
};

export default Teachers;

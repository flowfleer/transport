import React from 'react';
import Image from 'next/image'

const TestBox = ({name,img}) => {
    return (
        <>
            <div className="sm:w-1/4 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                    <Image alt="content" class="object-cover object-center h-full w-full" src={img} />
                </div>
                <h2 className="title-font text-xl font-light text-primary mt-2 mb-3">{name}</h2>
            </div>
        </>
    );
};

export default TestBox;
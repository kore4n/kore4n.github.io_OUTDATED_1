import React, { useState } from "react";
import dayjs from "dayjs";

export default function Age(){
    const [age, setAge] = useState(0);

    setInterval(() => {
        let time = dayjs().diff(dayjs(1022716800000), 'year', true);
        time = time.toString().substring(0, 12);
        setAge(time);
    }, 50);
    
    return (
        <span>
            {age}
        </span>
    )
}

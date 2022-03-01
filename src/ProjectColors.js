const projectColors = (() => {

    const possibleColors = [
        'red',
        'blue',
        'green',
        'orange',
        'pink',
        'purple',
        'antiquewhite',
        'lightblue',
        'lightgreen',
    ];

    const objOfProjectColors = {};

    const setColors = (tasks) => {
        const projectList = [];

        tasks.forEach((task)=>{
            const project = task.project;
            if(project) {
                if (!projectList.includes(project) && 
                !Object.keys(objOfProjectColors).includes(project)) {
                    projectList.push(project);
                }
            }
        })

        let remainingColors = [];

        projectList.forEach((project) => {
            if (remainingColors.length === 0) {
                possibleColors.map((color) => {
                    remainingColors.push(color);
                })
            }
            const colorIndex = Math.floor(Math.random() * remainingColors.length);
            objOfProjectColors[project] = remainingColors[colorIndex];
            remainingColors.splice(colorIndex, 1);
        });
    }

    return {setColors, objOfProjectColors}
})()
 
export default projectColors;
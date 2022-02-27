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

    const listsOfProjectColors = {}

    const setColors = (tasks) => {
        const projectList = [];

        tasks.forEach((task)=>{
            const project = task.project;
            if(project) {
                if (!projectList.includes(project)) {
                    projectList.push(project);
                }
            }
        })

        let remainingColors = [];

        projectList.forEach((project) => {
            if (remainingColors.length === 0) {
                remainingColors = possibleColors;
            }
            const colorIndex = Math.floor(Math.random() * remainingColors.length);
            listsOfProjectColors[project] = remainingColors[colorIndex];
            remainingColors.splice(colorIndex, 1);
        });
    }

    return {setColors, listsOfProjectColors}
})()
 
export default projectColors;
const filterOptions = [
    {
        id:'001',
        filterTitle:'Released Year',
        options:['1980-1990','1990-2000','2000-2010','2010-2020','2020-present'],
        name:'releasedYear'
    },
    {
        id:'002',
        filterTitle:'Runtime(min)',
        options:['>120','>140','>160','>180','>200'],
        name:'runtime'
    },
    {
        id:'003',
        filterTitle:'Certificate',
        options:['U','A','UA','R'],
        name:'certificate'
    },
    
    {
        id:'004',
        filterTitle:'Genre',
        options:['Drama','Crime','Thriller','Biography', 'Mystery','Comedy','Action'],
        name:'genre'
    },
    {
        id:'005',
        filterTitle:'IMDB_Rating',
        options:['>7','>8','>9'],
        name:'ratings'
    }
]


export default filterOptions
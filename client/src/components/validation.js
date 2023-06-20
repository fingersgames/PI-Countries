const validation=(data)=>{
    const errors={...data.errors}
    if(!data.name) 
        errors.name='No puede estar vacio'
    else if (data.name.length>35)
        errors.name='Muy largo'
    else errors.name=''

    if(data.duration>24)
        errors.duration='Menos de 24 horas'
    else errors.duration=0
    
    if(data.countries.length === 0)
        errors.countries=['Al menos un país']
    else errors.countries=[]



    return errors;
}
export default validation;
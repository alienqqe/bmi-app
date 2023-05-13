
export const Conclusion = ({output}) => {
    if (18.4 >= output){
        const isNormal = false
        return(
            <div className="conclusion" 
            style= {isNormal ? {backgroundColor: '#328749'} : {backgroundColor: '#8a2827'}}
            >
                <p className="conclusion-text">
                    Underweight
                </p>
            </div>
        )
    } else if(output >=18.5, output <= 24.9){
        const isNormal = true
        return(
            <div className="conclusion"
             style= {isNormal ? {backgroundColor: '#328749'} : {backgroundColor: '#8a2827'}}
            >
                <p 
                className="conclusion-text">Normal weight
                </p>
            </div>
        )
    } else if(output >= 25){
        const isNormal = false
        return(
            <div className="conclusion"
            style= {isNormal ? {backgroundColor: '#328749'} : {backgroundColor: '#8a2827'}}
            >
                <p className="conclusion-text">Overweigth</p>
            </div>
        )
    }
}

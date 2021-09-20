const Task = ({Title, Date, Description}) => {
    return (
        <div style={{width: "400px", border: "2px solid", borderRadius: "10px", padding: "10px", margin: "10px auto"}}>
            <h2>{Title}</h2>
            <p>{Date}</p>
            <p>{Description}</p>
            <button>Complete task</button>
        </div>
    )
}
export default Task
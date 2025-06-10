import { useState } from "react"

function Applications({applicationList, deleteFromList, darkMode}){

    const [statusFilter, setStatusFilter] = useState("All")

    const filteredApplications = applicationList.filter(application =>{
        return statusFilter === "All" || application.status === statusFilter
    })

   
    return <div className="main-container">
        <div className={darkMode ? "dark-mode-body body-container-applications" : "body-container-applications"}>
            <div className="greeting-container-applications">
                <h1>Applications</h1>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offered">Offered</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <div className="applications-list-window">
                <ul className="applications-list">
                    {[...filteredApplications].reverse().map((item, index) => (
                        <li key={item.id}>
                            <div className="list-item">

                            <h2>{item.title}</h2>
                            <h2>{item.company}</h2>
                            <h2>{item.date}</h2>
                            <h2>{item.status}</h2>
                            <button onClick={() => deleteFromList(item)} type="button">🗑️</button>

                            </div>
                           
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    
    </div>
}


export default Applications
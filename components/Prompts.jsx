
export default function Prompts({domain, domain_leads, team_application, total_tasks, members, data}) {

    const showPrompt = () => {
        const checklist_val = data.selectedCheckbox

        if(checklist_val==='cd1'){
            return (
                <h1 className="col-desc" >
                    There are more or less <span className="fact-highlight">{domain_leads} people</span> who contacted {domain} this year.
                </h1>
            )
        }else if(checklist_val==='cd2'){
            return (
                <h1 className="col-desc " id="cd2">
                    We currently have <span className="fact-highlight">{team_application} tasks for {domain}</span> 
                    this year and we currently have <span className="fact-highlight">{total_tasks} tasks </span> you can apply to.
                </h1>
            )
        }else if(checklist_val==='cd3'){
            return (
                <h1 className="col-desc " id="cd3">
                <span className="">{domain}</span>   
                 is part of our VNOC/Contrib network and we currently have a <span className="fact-highlight">developer api</span> you could play with.
                </h1>
            )
        }else if(checklist_val==='cd4'){
            return(
                <h1 className="col-desc " id="cd4">
                    <span className="">{domain}</span> is part of our Contrib Platform where you can earn CTB, Cash or Domain tokens by completing simple tasks. 
                    Currently {domain} has <span className="fact-highlight">200 tasks</span> you can apply to.
                </h1>
            )
        }else if(checklist_val==='cd5'){
            return(
                <h1 className="col-desc " >
                    <span className="">{domain}</span> is currently open for <span className="fact-highlight">partnerships and synergies</span> at this time.
                </h1>
            )
        }else if(checklist_val==='cd6'){
            return(
                <h1 className="col-desc ">
                    There are over <span className="fact-highlight">{members}</span> people you can connect to on our Contrib network!
                </h1>
            )
        }
    }
    return (
        showPrompt()
    )
}
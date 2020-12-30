import React from 'react'

import './TextProcessingTable.scss'

import SwitchCheckbox from './common/SwitchCheckbox'
import Spinner from './common/Spinner'

const TextProcessingTable = ({operations}) => {
    if (!operations.length) return <Spinner />

    return (
        <table className="text-processing-table">
            <thead>
                <tr>
                    <th colSpan="2">Text Processing Options</th>
                </tr>
            </thead>
            <tbody>
                {operations.map(operation => (
                    <tr key={operation.name}>
                        <th>
                            <SwitchCheckbox />
                        </th>
                        <td>{operation.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TextProcessingTable

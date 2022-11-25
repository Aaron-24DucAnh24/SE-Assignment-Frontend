import React from "react";

function McpInfo(props) {
    return (
        <div>
            {props.mcpList
                .filter((_mcp) => _mcp.name === props.mcp)
                .map((filteredMcp) => {
                    return (
                        <div key={filteredMcp.name}>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Mã MCP: </b>
                                    {filteredMcp.code}
                                </li>
                                <li>
                                    <b>Tên: </b>
                                    {filteredMcp.name}
                                </li>
                                <li>
                                    <b>Sức chứa: </b>
                                    {filteredMcp.weight}
                                </li>
                                <li>
                                    <b>Trạng thái: </b>
                                    {filteredMcp.status}
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Nhân viên vệ sinh: </b>
                                    <div className="detailInformation-name__wrap">
                                        {filteredMcp.janitor}
                                    </div>
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Xe đẩy hiện có: </b>
                                    <div className="detailInformation-name__wrap">
                                        {filteredMcp.vehicle}
                                    </div>
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Nhân viên thu gom: </b>
                                    <div className="detailInformation-name__wrap">
                                        {filteredMcp.collector}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })}
        </div>
    );
}

export default McpInfo;

function InfoCard({data}){
   return(
    <div className="middle">
        <div className="info-item">
            <span className="label">IP ADDRESS</span>
            <span className="value">{data.ip}</span>
        </div>

       <div className="info-item">
            <span className="label">LOCATION</span>
            <span className="value">
                {data.location.city},{data.location.region}
            </span>
        </div>
       
       <div className="info-item">
            <span className="label">TIMEZONE</span>
            <span className="value">
                UTC{data.location.timezone}
            </span>
        </div>

        <div className="info-item">
            <span className="label">ISP</span>
            <span className="value">{data.isp}</span>
        </div>
    </div>
   );
};

export default InfoCard;
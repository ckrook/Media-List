function Media(props) {
  let fileExtension = "";
  fileExtension = props.src.split(".").pop();
  return (
    <>
      <div className="w-full ">
        {fileExtension === "mp4" ? (
          <video autoPlay controls width="100%">
            <source src={props.src} type="video/webm" />
            <source src={props.src} type="video/mp4" />
          </video>
        ) : (
          <img src={props.src} alt={props.title} />
        )}
      </div>
    </>
  );
}

export default Media;

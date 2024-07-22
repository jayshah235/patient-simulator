import { forwardRef, memo, useEffect, useRef, useState } from "react";
import loadingImage from "../../assests/images/placeholder-blur.jpg";
import styles from "./style.module.scss";

const Image = forwardRef((props, ref) => {
  const {
    loadingSrc = loadingImage,
    src,
    className,
    placeHolderStyle,
    alt = "image",
    ...restProps
  } = props;

  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("");
  const loadingImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setView(src);
        if (loadingImageRef.current) {
          observer.unobserve(loadingImageRef.current);
        }
      }
    });

    if (loadingImageRef && loadingImageRef.current) {
      observer.observe(loadingImageRef.current);
    }

    return () => {
      if (loadingImageRef && loadingImageRef.current) {
        observer.unobserve(loadingImageRef.current);
      }
    };
  }, [src]);

  return (
    <>
      {loading && (
        <img
          src={loadingSrc}
          alt="loading"
          ref={loadingImageRef}
          style={placeHolderStyle}
        />
      )}
      <img
        src={view}
        alt={alt}
        className={loading ? styles.hidden : className}
        onLoad={() => setLoading(false)}
        ref={ref}
        {...restProps}
      />
    </>
  );
});

export default memo(Image);

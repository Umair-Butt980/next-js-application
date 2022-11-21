export default function Footer() {
  const footer_description_width = "245px";
  return (
    <footer aria-labelledby="footer-heading">
      <div className={`sm:px-6 lg:px-8`}>
        <div className="my-8">
          <p className="text-sm text-secondary-400 text-center">
            Copyright 2022 RepairDesk, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

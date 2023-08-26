import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi
        sem. Nam vestibulum eros nec tellus placerat efficitur. Morbi dignissim
        lobortis dapibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Duis sed sagittis tortor, ut
        posuere metus. Proin scelerisque fermentum dolor, a euismod urna auctor
        porta. Integer convallis imperdiet arcu, eget vehicula odio porta id.
        Aliquam eget leo tincidunt, interdum odio congue, vulputate leo. Cras
        molestie dolor arcu, eget commodo tortor imperdiet nec.
      </p>
    </div>
  );
}

export default ModalPage;

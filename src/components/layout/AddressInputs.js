export default function AddressInputs({
  addressProps,
  setAddressProp,
  disabled = false,
}) {
  const { phone, streetAddress, postalCode, city, country } = addressProps;
  return (
    <>
      <label>Phone</label>
      <input
        disabled={disabled}
        type="tel"
        placeholder="Phone number"
        value={phone || ""}
        onChange={(ev) => setAddressProp("phone", ev.target.value)}
      />
      <label>Street address</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Street address"
        value={streetAddress || ""}
        onChange={(ev) => setAddressProp("streetAddress", ev.target.value)}
      />
      <label>Town</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Town"
        value={city || ""}
        onChange={(ev) => setAddressProp("city", ev.target.value)}
      />
      <label>City</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="City"
        value={country || ""}
        onChange={(ev) => setAddressProp("country", ev.target.value)}
      />
    </>
  );
}

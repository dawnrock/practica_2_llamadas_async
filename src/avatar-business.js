function getAvatar(user) {
  const img = document.createElement("img");
  img.src = user.avatar_url;

  return img;
}

export { getAvatar };

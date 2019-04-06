function links(parent, args, context) {
  return context.prisma.user({ id: parent.id }).links();
}

function votes(parent, args, context) {
  return context.prisma.link({ id: parent.id }).votes();
}

module.exports = {
  links,
  votes
};

function feed(parent, args, context) {
  const { skip, first, filter } = args;
  const where = filter
    ? {
        OR: [{ description_contains: filter }, { url_contains: filter }]
      }
    : {};

  return context.prisma.links({
    where,
    first,
    skip
  });
}

module.exports = {
  feed
};
